import React from 'react'
import { TimedCallback } from 'morabaa-tools'

const SearchInput = ({
  id,
  onChange,
  placeholder,
  value: _defaultValue,
  storageKey,
  containerClass = 'bg-prim ',
  icon: Icon = _searchIcon,
  className = 'search-input',
  dely = 700,
  onFocus,
  style,
  onInit,
  storage = storageKey ? sessionStorage : null,
  children
}) =>
  React.useMemo(() => {
    let container,
      value = storage?.getItem(storageKey) || _defaultValue

    const setValue = (value, effect = false) => {
      const target = container.querySelector('.search-input')
      target.value = value
      storage?.setItem(storageKey, value)
      target.nextSibling.className = value ? 'delete-mark' : ''
      effect &&
        onChange({ clear, value: value, title: placeholder, id, setValue })
    }

    const clear = (effect) => setValue('', effect)
    onInit?.({ setValue, clear, value, title: placeholder, id })

    const onInputChange = ({ target }, _dely = dely) => {
      const callback = () => {
        value = target.value
        storage?.setItem(storageKey, value)
        target.nextSibling.className = value ? 'delete-mark' : ''
        onChange({ setValue, clear, value: value, title: placeholder, id })
      }
      TimedCallback.create({ id, callback, timeout: _dely })
    }

    return (
      <div
        ref={(_ref) => _ref && (container = _ref)}
        key={id}
        className={containerClass + ' search-input-container'}
        style={style}
      >
        {children}
        <input
          onFocus={({ target }) => {
            onFocus?.({ clear, value: target.value, title: placeholder, id })
          }}
          type='text'
          tabIndex='-1'
          placeholder={placeholder}
          defaultValue={value}
          className={className}
          onChange={onInputChange}
        />
        <span
          onClick={() => clear(true)}
          className={`${value ? 'delete-mark' : ''}`}
        />
        <div className='search-icon'>
          <Icon value={value} />
        </div>
      </div>
    )
  }, [])

export default SearchInput

const _searchIcon = () => (
  <svg
    style={{ height: 18 }}
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 340 340'
  >
    <path
      d='M330,474V460c.6-4.25,1.26-8.48,1.8-12.74,6.53-51.12,46.65-97.64,96.49-111.23,10.35-2.82,21.13-4.06,31.71-6h14c6.06.9,12.16,1.64,18.19,2.74,79.21,14.39,129,95.56,106,172.79-4.69,15.78-12.13,30.14-22.47,44.28a43.84,43.84,0,0,1,4.39,3.38C607,580,633.91,606.81,660.6,633.83c3.74,3.79,6.29,8.75,9.4,13.17v8a23.07,23.07,0,0,1-15,15h-8c-4.42-3.11-9.37-5.67-13.16-9.42-27.14-26.81-54.05-53.86-81-80.83-1.15-1.16-2.37-2.24-3.4-3.21a3.21,3.21,0,0,0-.82.14c-1,.65-1.92,1.31-2.88,2-28.34,19.69-59.69,28-94,24.26-57.37-6.26-105.23-49.14-117.84-105.44C332.13,489.76,331.27,481.83,330,474Zm38.31-7a98.88,98.88,0,0,0,98.77,98.83c54.11,0,98.5-44.31,98.71-98.47.21-54.46-44-98.83-98.56-99S368.35,412.47,368.31,467Z'
      transform='translate(-330 -330)'
    />
  </svg>
)
function ClearIcon({ value, xId, clear }) {
  return (
    <svg
      className={`clear-icon ${value ? '' : 'hide'}`}
      id={xId}
      onClick={clear}
      height={10}
      style={{ fill: 'var(--red)' }}
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 460.775 460.775'
    >
      <path d='M285.08,230.397L456.218,59.27c6.076-6.077,6.076-15.911,0-21.986L423.511,4.565c-2.913-2.911-6.866-4.55-10.992-4.55c-4.127,0-8.08,1.639-10.993,4.55l-171.138,171.14L59.25,4.565c-2.913-2.911-6.866-4.55-10.993-4.55c-4.126,0-8.08,1.639-10.992,4.55L4.558,37.284c-6.077,6.075-6.077,15.909,0,21.986l171.138,171.128L4.575,401.505c-6.074,6.077-6.074,15.911,0,21.986l32.709,32.719c2.911,2.911,6.865,4.55,10.992,4.55c4.127,0,8.08-1.639,10.994-4.55l171.117-171.12l171.118,171.12c2.913,2.911,6.866,4.55,10.993,4.55c4.128,0,8.081-1.639,10.992-4.55l32.709-32.719c6.074-6.075,6.074-15.909,0-21.986L285.08,230.397z' />
    </svg>
  )
}
