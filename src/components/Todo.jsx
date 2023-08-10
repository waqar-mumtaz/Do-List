import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

function Todo() {
  return (
    <section className="pt-4">
        <ul>
          <li className="flex items-center justify-between py-2">
            <div className="flex items-center gap-2">
              <input
                className="w-4 h-4 cursor-pointer"
                id="checkbox"
                type="checkbox"
              />
              <p>Print bills</p>
            </div>
            <div className="cursor-pointer">
            <FontAwesomeIcon icon={faXmark}  size="sm"  />
            </div>
          </li>
          <hr />
          <li className="flex items-center justify-between py-2">
            <div className="flex items-center gap-2">
              <input
                className="w-4 h-4 cursor-pointer"
                id="checkbox"
                type="checkbox"
              />
              <p>Call Rampbo</p>
            </div>
            <div className="cursor-pointer">
              <i className="fa-solid fa-xmark"></i>
            </div>
          </li>
          <hr />
          <li className="flex items-center justify-between py-2">
            <div className="flex items-center gap-2">
              <input
                className="w-4 h-4 cursor-pointer"
                id="checkbox"
                type="checkbox"
              />
              <p>Print Statements all</p>
            </div>
            <div className="cursor-pointer">
              <i className="fa-solid fa-xmark"></i>
            </div>
          </li>
          <hr />
          <li className="flex items-center justify-between py-2">
            <div className="flex items-center gap-2">
              <input
                className="w-4 h-4 cursor-pointer"
                id="checkbox"
                type="checkbox"
              />
              <p>it be advisable for me to think about business content?</p>
            </div>
            <div className="cursor-pointer">
              <i className="fa-solid fa-xmark"></i>
            </div>
          </li>
          <hr />
          <li className="flex items-center justify-between py-2">
            <div className="flex items-center gap-2">
              <input
                className="w-4 h-4 cursor-pointer"
                id="checkbox"
                type="checkbox"
              />
              <p>For what reason would it be advisable for me to think.</p>
            </div>
            <div className="cursor-pointer">
              <i className="fa-solid fa-xmark"></i>
            </div>
          </li>
          <hr />
          <li className="flex items-center justify-between py-2">
            <div className="flex items-center gap-2">
              <input
                className="w-4 h-4 cursor-pointer"
                id="checkbox"
                type="checkbox"
              />
              <p>For what reason would it be advisable.</p>
            </div>
            <div className="cursor-pointer">
              <i className="fa-solid fa-xmark"></i>
            </div>
          </li>
          <hr />
        </ul>
    </section>
  );
}

export default Todo;
