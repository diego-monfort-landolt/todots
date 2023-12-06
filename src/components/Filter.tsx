import { FILTER_BUTTONS, TODO_FILTER } from '../consts'
import { type FilterValue } from '../types'

interface Props {
  onFilterChanged: (filter: FilterValue) => void
  filterSelected: FilterValue
}

export const Filter: React.FC<Props> = ({ filterSelected, onFilterChange }) => {
  const handleClick = (filter: FilterValue)
  return (
   <ul className='filters'>
    {
      Object.entries(FILTER_BUTTONS).map(([key, { href, literal }]) => {
        const isSelected = key === filterSelected
        const className = isSelected ? 'selected' : ''

        return (
          <li key={key}>
             <a className={className}
             href={href}
             onClick={handleClick(key)}
        >
         {literal}
      </a>

          </li>
        )

      })
    }
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
