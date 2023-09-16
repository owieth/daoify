export default function Separator() {
  return (
    <div className="relative w-full bg-black">
      <div
        className="user-select-none center pointer-events-none absolute left-1/2 top-0 h-px w-[700px] max-w-full -translate-x-1/2 -translate-y-1/2"
        style={{
          background:
            'linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgba(255, 255, 255, 0) 0%, rgba(143, 143, 143, 0.67) 50%, rgba(0, 0, 0, 0) 100%)',
        }}
      />
      <div
        className="user-select-none center pointer-events-none absolute left-1/2 top-0 h-[300px] w-full max-w-full -translate-x-1/2 -translate-y-1/2"
        style={{
          background:
            'conic-gradient(from 90deg at 50% 50%, rgba(0, 0, 0, 0) 50%, rgb(0, 0, 0) 50%), radial-gradient(rgba(200, 200, 200, 0.1) 0%, transparent 80%)',
        }}
      />
    </div>
  );
}
