import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import './SortableItem.css';

function SortableItem({ item, index, isSubmitted, isCorrect, correctPosition }) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: item.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  let itemClass = 'sortable-item';
  if (isDragging) {
    itemClass += ' dragging';
  }
  if (isSubmitted) {
    if (isCorrect) {
      itemClass += ' correct';
    } else {
      itemClass += ' incorrect';
    }
  }

  return (
    <div
      ref={setNodeRef}
      style={style}
      className={itemClass}
      {...attributes}
      {...listeners}
    >
      <div className="item-number">{index + 1}</div>
      <div className="item-text">{item.text}</div>
      {isSubmitted && (
        <div className="item-feedback">
          {isCorrect ? (
            <span className="feedback-icon correct-icon">✓</span>
          ) : (
            <span className="feedback-icon incorrect-icon">
              ✗ (should be #{correctPosition + 1})
            </span>
          )}
        </div>
      )}
    </div>
  );
}

export default SortableItem;
