export const BorderSwatch = ({ name, radius = 0, width = 1 }) => {
  return (
    <div
      style={{ display: 'flex', alignItems: 'center', marginBottom: '16px' }}
    >
      <div
        style={{
          width: '200px',
          height: '100px',
          backgroundColor: '#eff1ff',
          borderStyle: 'solid',
          borderColor: '#1840c4',
          borderRadius: radius,
          borderWidth: width,
          marginRight: '24px',
        }}
      />
      <span>
        <span style={{ fontWeight: 700 }}>{name}</span> <br />
        width: {width}, radius: {radius}
      </span>
    </div>
  );
};
