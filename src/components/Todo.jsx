import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

function Todo({todo}) {
  return (
    <section className="pt-4">
        <ul>
          <li className="flex items-center justify-between py-4 border-b">
            <div className="flex items-center gap-2">
              <input
                className="w-4 h-4 cursor-pointer"
                id="checkbox"
                type="checkbox"
              />
              <p>{todo}</p>
            </div>
            <div className="cursor-pointer">
            <FontAwesomeIcon icon={faXmark}  size="sm"  />
            </div>
          </li>
        </ul>
    </section>
  );
}

export default Todo;
