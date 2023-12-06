export const TODO_FILTER = {
  ALL: 'all',
  ACTIVE: 'active',
  COMPLETED: 'completed'
} as const

// as const do that the value its not changed

export const FILTER_BUTTONS = {
  [TODO_FILTER.ALL]: {
    literal: 'Todos',
    href: `/?filter${TODO_FILTER.ALL}`
  },
  [TODO_FILTER.ACTIVE]: {
    literal: 'Activos',
    href: `/?filter${TODO_FILTER.ACTIVE}`
  },
  [TODO_FILTER.COMPLETED]: {
    literal: 'Completados',
    href: `/?filter${TODO_FILTER.COMPLETED}`
  }
} as const
