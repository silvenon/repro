import { useFloating, offset, shift } from '@floating-ui/react-dom'

export default function App() {
  const {x, y, reference, floating, strategy} = useFloating({
    placement: 'right',
    middleware: [offset(10), shift()],
  });

  return (
    <div className="container mx-auto p-5">
      <span ref={reference}>Reference</span>
      <div
        className="py-1 px-2 bg-slate-100 border rounded border-slate-300"
        ref={floating}
        style={{
          position: strategy,
          top: y ?? '',
          left: x ?? '',
        }}
      >
        Tooltip
      </div>
    </div>
  );
}