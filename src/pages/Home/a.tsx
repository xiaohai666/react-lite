export default function Playground({ fn }: { fn: (num: number) => void }) {
  return (
    <button
      type="button"
      onClick={() => {
        fn(11);
      }}
    >
      子组件添加
    </button>
  );
}
