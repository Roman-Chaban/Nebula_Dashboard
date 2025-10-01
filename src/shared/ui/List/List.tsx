import { ListItemKey, ListProps } from '@/entities/ui/list/model/types';

export const List = <T extends { id: ListItemKey }>({
  tag: Tag = 'ul',
  renderList,
  className = '',
  itemClassName = '',
  renderItem,
  getItemKey = (item) => item.id,
  ...props
}: ListProps<T>) => {
  return (
    <Tag className={className} {...props}>
      {renderList.map((item, index) => (
        <li key={getItemKey(item)} className={itemClassName}>
          {renderItem(item, index)}
        </li>
      ))}
    </Tag>
  );
};
