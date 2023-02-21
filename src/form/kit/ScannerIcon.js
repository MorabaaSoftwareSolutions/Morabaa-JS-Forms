import React from 'react'
import { CustomEvents } from '../../utils'
// import Scanner from "./Scanner";
const ScannerIcon = ({ prop }) => {
  return (
    <div key={prop.key} className={prop.containerClass || 'relative'}>
      <svg
        onClick={() => {
          const onResult = (result) => {
            let handeled = CustomEvents.setToInput(
              prop.key.split('-')[0],
              result.text
            )
            if (!handeled) {
              prop.value = result.text
              prop.onChange(prop)
            }
          }
          // Scanner(onResult);
        }}
        xmlns='http://www.w3.org/2000/svg'
        className='barcode-svg'
        height={35}
        style={{ paddingTop: 6 }}
        viewBox='0 0 512 512'
      >
        <path d='M40 32C53.25 32 64 42.75 64 56V456C64 469.3 53.25 480 40 480H24C10.75 480 0 469.3 0 456V56C0 42.75 10.75 32 24 32H40zM128 48V464C128 472.8 120.8 480 112 480C103.2 480 96 472.8 96 464V48C96 39.16 103.2 32 112 32C120.8 32 128 39.16 128 48zM200 32C213.3 32 224 42.75 224 56V456C224 469.3 213.3 480 200 480H184C170.7 480 160 469.3 160 456V56C160 42.75 170.7 32 184 32H200zM296 32C309.3 32 320 42.75 320 56V456C320 469.3 309.3 480 296 480H280C266.7 480 256 469.3 256 456V56C256 42.75 266.7 32 280 32H296zM448 56C448 42.75 458.7 32 472 32H488C501.3 32 512 42.75 512 56V456C512 469.3 501.3 480 488 480H472C458.7 480 448 469.3 448 456V56zM384 48C384 39.16 391.2 32 400 32C408.8 32 416 39.16 416 48V464C416 472.8 408.8 480 400 480C391.2 480 384 472.8 384 464V48z' />
      </svg>
      {/* <input
                    type="text"
                    tabIndex="-1"
                    id={prop.key}
                    name={prop.key}
                    placeholder={prop.title}
                    onChange={({ target }) => {
                        checkChange(target, prop);
                    }}
                    className={prop.className}
                />
                <span
                    className="clear-icon hide"
                    onClick={({ target }) => {
                        prop.value = "";
                        target.previousSibling.value = "";
                        target.classList.add("hide");
                        prop.onChange();
                    }}>
                    x
                </span> */}
    </div>
  )
}

export default ScannerIcon
