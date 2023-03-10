import './kit.css'
export { default as SearchInput } from './SearchInput'
export { default as ToggleButton } from './Toggle'
export { default as Selector } from './Selector'
export { default as TextInput } from './TextInput'
export { default as DateInput } from './DateInput'
export { default as FilterButton } from './FilterButton'
export { default as Options } from './Options'
export { default as Group } from './Group'
export { default as ScannerIcon } from './ScannerIcon'
export { default as PopupSelector } from './PopupSelector'
export { default as LinkLabel } from './LinkLabel'

export { default as OptionsIcon } from './OptionsIcon'

export const keys = {
  search: 'SearchInput',
  text: 'TextInput',
  toggle: 'ToggleButton',
  selector: 'Selector',
  date: 'DateInput',
  filter: 'FilterButton',
  options: 'Options',
  group: 'Group',
  scanner: 'ScannerIcon',
  popupSelector: 'PopupSelector',
  link: 'LinkLabel'
}

export const FieldsSample = [
  {
    className:
      'row-center rounded-md gap-md bg-throne py-xs px-md self-start items-cen',
    children: [
      {
        id: 'name',
        type: 'search',
        title: 'Name',
        value: '',
        storageKey: 'items-query',
        containerClass: 'query-input'
      },
      {
        id: 'toggle',
        type: 'toggle',
        title: 'toggleTest',
        value: false,
        storageKey: 'items-toggle'
      },
      {
        id: 'age',
        type: 'popupSelector',
        title: 'Age',
        value: 1,
        storageKey: 'q-age',
        options: [
          { id: 'big', title: 'اكبر' },
          { id: 'small', title: 'اصغر' }
        ]
      },
      {
        id: 'currencyId',
        type: 'options',
        title: 'العملة',
        value: 1,
        storageKey: 'q-currencyId',
        options: [
          { id: 1, title: 'دينار' },
          { id: 2, title: 'دولار' }
        ]
      },
      {
        id: 'sort',
        type: 'selector',
        title: 'Selector',
        value: 1,
        storageKey: 'q-currencyId',
        options: [
          { id: 1, title: 'التاريخ' },
          { id: 2, title: 'السعر' }
        ]
      },
      {
        id: 'deleted',
        type: 'toggle',
        title: 'المحذوقة',
        value: false,
        storageKey: 'is-query'
      },
      {
        id: 'from',
        type: 'date',
        title: 'التاريخ من',
        storageKey: 'q-from'
      }
    ]
  }
]
