export const BorderSwatch = ({ name, radius = 0, width = 1 }) => {
  return (
    <div style={{ marginBottom: 32 }}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: 100,
          background: '#fff9ef',
          borderStyle: 'solid',
          borderColor: '#1840c4',
          borderRadius: radius,
          borderWidth: width,
          boxSizing: 'border-box',
        }}
      >
        <p
          style={{
            color: '#1840c4',
            fontWeight: 600,
            fontSize: 16,
            textAlign: 'center',
          }}
        >
          "{name}" <br /> Radius: {radius}, Width: {width}px
        </p>
      </div>
    </div>
  );
};
