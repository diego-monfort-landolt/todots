import { TODO_FILTER } from '../consts'

const FILTER_BUTTONS = {
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

export const Filter: React.FC<Props> = ({ filterSelected, onFilterChange }) => {
  return (
   <ul className='filters'>
    <li>
      <a className={'$filterSelected === \'all\' ? \'selected\' : \'\' }'}
      onClick={() => {
        onFilterChange('all')
      }}
        >
          Todos
      </a>
    </li>

    <li>
      <a className={'$filterSelected === \'active\' ? \'selected\' : \'\' }'}
      onClick={() => {
        onFilterChange('active')
      }}
        >
          Active
      </a>
    </li>

    <li>
      <a className={'$filterSelected === \'completed\' ? \'selected\' : \'\' }'}
      onClick={() => {
        onFilterChange('completed')
      }}
        >
          completed
      </a>
    </li>

   </ul>
  )
}
