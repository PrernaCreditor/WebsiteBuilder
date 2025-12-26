import React, { createContext, useContext, useReducer, useCallback } from "react";
import { v4 as uuidv4 } from "uuid";
import { getDefaultPage } from "@/lib/defaultPageData";

// ------------------------------------
// Reducer
// ------------------------------------
function builderReducer(state, action) {
  const saveToHistory = (newPage) => ({
    ...state,
    page: newPage,
    history: [...state.history.slice(0, state.historyIndex + 1), newPage],
    historyIndex: state.historyIndex + 1,
  });

  switch (action.type) {
    case "SET_PAGE":
      return saveToHistory(action.payload);

    case "SELECT_SECTION":
      return {
        ...state,
        editor: {
          ...state.editor,
          selectedSectionId: action.payload,
          selectedComponentId: null,
        },
      };

    case "SELECT_COMPONENT":
      return {
        ...state,
        editor: { ...state.editor, selectedComponentId: action.payload },
      };

    case "SET_EDIT_MODE":
      return {
        ...state,
        editor: { ...state.editor, editMode: action.payload },
      };

    case "SET_PREVIEW_MODE":
      return {
        ...state,
        editor: {
          ...state.editor,
          previewMode: action.payload,
          selectedSectionId: null,
          selectedComponentId: null,
        },
      };

    case "SET_DRAGGING":
      return {
        ...state,
        editor: { ...state.editor, isDragging: action.payload },
      };

    case "SET_ZOOM":
      return {
        ...state,
        editor: { ...state.editor, zoom: action.payload },
      };

    case "TOGGLE_GRID":
      return {
        ...state,
        editor: {
          ...state.editor,
          showGrid: action.payload ?? !state.editor.showGrid,
        },
      };

    case "ADD_SECTION": {
      const newSections = [...state.page.sections];
      const index = action.payload.index ?? newSections.length;
      newSections.splice(index, 0, action.payload.section);
      return saveToHistory({ ...state.page, sections: newSections });
    }

    case "UPDATE_SECTION": {
      const newSections = state.page.sections.map((s) =>
        s.id === action.payload.id ? { ...s, ...action.payload.updates } : s
      );
      return saveToHistory({ ...state.page, sections: newSections });
    }

    case "DELETE_SECTION":
      return saveToHistory({
        ...state.page,
        sections: state.page.sections.filter((s) => s.id !== action.payload),
      });

    case "REORDER_SECTIONS": {
      const map = new Map(state.page.sections.map((s) => [s.id, s]));
      const newSections = action.payload.map((id) => map.get(id)).filter(Boolean);
      return saveToHistory({ ...state.page, sections: newSections });
    }

    case "TOGGLE_SECTION_VISIBILITY": {
      const newSections = state.page.sections.map((s) =>
        s.id === action.payload ? { ...s, visible: !s.visible } : s
      );
      return saveToHistory({ ...state.page, sections: newSections });
    }

    case "DUPLICATE_SECTION": {
      const index = state.page.sections.findIndex((s) => s.id === action.payload);
      if (index === -1) return state;

      const original = state.page.sections[index];
      const duplicate = {
        ...original,
        id: uuidv4(),
        name: `${original.name} (Copy)`,
        components: original.components.map((c) => ({
          ...c,
          id: uuidv4(),
        })),
      };

      const newSections = [...state.page.sections];
      newSections.splice(index + 1, 0, duplicate);
      return saveToHistory({ ...state.page, sections: newSections });
    }

    case "ADD_COMPONENT": {
      const newSections = state.page.sections.map((s) => {
        if (s.id !== action.payload.sectionId) return s;
        const components = [...s.components];
        const index = action.payload.index ?? components.length;
        components.splice(index, 0, action.payload.component);
        return { ...s, components };
      });
      return saveToHistory({ ...state.page, sections: newSections });
    }

    case "UPDATE_COMPONENT": {
      const newSections = state.page.sections.map((s) => {
        if (s.id !== action.payload.sectionId) return s;
        return {
          ...s,
          components: s.components.map((c) =>
            c.id === action.payload.componentId
              ? { ...c, ...action.payload.updates }
              : c
          ),
        };
      });
      return saveToHistory({ ...state.page, sections: newSections });
    }

    case "DELETE_COMPONENT": {
      const newSections = state.page.sections.map((s) => {
        if (s.id !== action.payload.sectionId) return s;
        return {
          ...s,
          components: s.components.filter(
            (c) => c.id !== action.payload.componentId
          ),
        };
      });
      return saveToHistory({ ...state.page, sections: newSections });
    }

    case "UPDATE_NAVBAR":
      return saveToHistory({
        ...state.page,
        navbar: { ...state.page.navbar, ...action.payload },
      });

    case "UPDATE_FOOTER":
      return saveToHistory({
        ...state.page,
        footer: { ...state.page.footer, ...action.payload },
      });

    case "UNDO":
      if (state.historyIndex <= 0) return state;
      return {
        ...state,
        page: state.history[state.historyIndex - 1],
        historyIndex: state.historyIndex - 1,
      };

    case "REDO":
      if (state.historyIndex >= state.history.length - 1) return state;
      return {
        ...state,
        page: state.history[state.historyIndex + 1],
        historyIndex: state.historyIndex + 1,
      };

    default:
      return state;
  }
}

// ------------------------------------
// Context
// ------------------------------------
const BuilderContext = createContext(null);

// ------------------------------------
// Provider
// ------------------------------------
export function BuilderProvider({ children, initialPage }) {
  const defaultPage = initialPage ?? getDefaultPage();

  const [state, dispatch] = useReducer(builderReducer, {
    page: defaultPage,
    editor: {
      selectedSectionId: null,
      selectedComponentId: null,
      editMode: "content",
      isDragging: false,
      zoom: 100,
      showGrid: false,
      previewMode: false,
    },
    history: [defaultPage],
    historyIndex: 0,
  });

  const selectSection = useCallback(
    (id) => dispatch({ type: "SELECT_SECTION", payload: id }),
    []
  );

  const selectComponent = useCallback(
    (id) => dispatch({ type: "SELECT_COMPONENT", payload: id }),
    []
  );

  const undo = useCallback(() => dispatch({ type: "UNDO" }), []);
  const redo = useCallback(() => dispatch({ type: "REDO" }), []);

  const selectedSection = state.editor.selectedSectionId
    ? state.page.sections.find(
        (s) => s.id === state.editor.selectedSectionId
      ) || null
    : null;

  const selectedComponent =
    state.editor.selectedComponentId && selectedSection
      ? selectedSection.components.find(
          (c) => c.id === state.editor.selectedComponentId
        ) || null
      : null;

  return (
    <BuilderContext.Provider
      value={{
        state,
        dispatch,
        selectSection,
        selectComponent,
        undo,
        redo,
        canUndo: state.historyIndex > 0,
        canRedo: state.historyIndex < state.history.length - 1,
        selectedSection,
        selectedComponent,
      }}
    >
      {children}
    </BuilderContext.Provider>
  );
}

// ------------------------------------
// Hook
// ------------------------------------
export function useBuilder() {
  const context = useContext(BuilderContext);
  if (!context) {
    throw new Error("useBuilder must be used within a BuilderProvider");
  }
  return context;
}
