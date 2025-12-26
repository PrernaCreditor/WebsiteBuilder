// Core Builder Types - JSON Schema for Page Structure

export const COMPONENT_TYPES = [
  'text',
  'heading',
  'paragraph',
  'button',
  'image',
  'icon',
  'divider',
  'spacer',
  'container',
  'grid',
  'card'
];

export const SECTION_TYPES = [
  'hero',
  'features',
  'services',
  'cta',
  'testimonials',
  'gallery',
  'pricing',
  'contact',
  'stats',
  'team',
  'faq',
  'logocloud',
  'custom'
];

export const NAVBAR_STYLES = ['minimal', 'centered', 'split', 'transparent'];
export const FOOTER_STYLES = ['simple', 'columns', 'centered', 'minimal'];

// Default style objects
export const defaultComponentStyles = {
  backgroundColor: undefined,
  textColor: undefined,
  fontSize: undefined,
  fontWeight: undefined,
  padding: undefined,
  margin: undefined,
  borderRadius: undefined,
  border: undefined,
  shadow: undefined,
  width: undefined,
  height: undefined,
  opacity: undefined,
  customClasses: undefined,
};

export const defaultSectionStyles = {
  backgroundColor: undefined,
  backgroundImage: undefined,
  backgroundGradient: undefined,
  padding: undefined,
  minHeight: undefined,
  customClasses: undefined,
};

// Example builder component
export function createBuilderComponent({
  id,
  type,
  content = {},
  styles = {},
  children = []
}) {
  return { id, type, content, styles, children };
}

// Example builder section
export function createBuilderSection({
  id,
  type,
  name,
  visible = true,
  locked = false,
  styles = {},
  content = {},
  components = [],
  variant
}) {
  return { id, type, name, visible, locked, styles, content, components, variant };
}

// Navbar / Footer structures
export function createNavbarConfig({
  id,
  style,
  logo = {},
  links = [],
  styles = {}
}) {
  return { id, style, logo, links, styles };
}

export function createFooterConfig({
  id,
  style,
  logo = {},
  columns = [],
  socialLinks = [],
  copyright = '',
  styles = {}
}) {
  return { id, style, logo, columns, socialLinks, copyright, styles };
}

// Page meta and schema
export function createPageMeta({ title, description, favicon }) {
  return { title, description, favicon };
}

export function createPageSchema({
  id,
  name,
  slug,
  meta,
  navbar,
  sections = [],
  footer,
  globalStyles = {}
}) {
  return { id, name, slug, meta, navbar, sections, footer, globalStyles };
}

// Editor state
export function createEditorState({
  selectedSectionId = null,
  selectedComponentId = null,
  editMode = 'content',
  isDragging = false,
  zoom = 100,
  showGrid = false,
  previewMode = false
}) {
  return {
    selectedSectionId,
    selectedComponentId,
    editMode,
    isDragging,
    zoom,
    showGrid,
    previewMode
  };
}

// Drag item
export function createDragItem({ id, type, data }) {
  return { id, type, data };
}

// Section template
export function createSectionTemplate({
  id,
  name,
  type,
  thumbnail,
  defaultContent = {},
  defaultStyles = {},
  defaultComponents = []
}) {
  return { id, name, type, thumbnail, defaultContent, defaultStyles, defaultComponents };
}

// Component template
export function createComponentTemplate({
  id,
  name,
  type,
  icon,
  defaultContent = {},
  defaultStyles = {}
}) {
  return { id, name, type, icon, defaultContent, defaultStyles };
}
