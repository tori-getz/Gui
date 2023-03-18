
interface ICounter {
  value: number;
  onChange: () => unknown;
}

export const Counter: Gui.Component<ICounter> = ({
  value,
  onChange
}) => {
  return (
    <button onClick={onChange}>
      count is {value}
    </button>
  )
}
