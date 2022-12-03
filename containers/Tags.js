const Tags = ({ data, onClickTag }) => {
  return (
    <div style={{ width: '100%', marginTop: 10, cursor: 'pointer' }}>
      <p>
        <span>
          <b>Từ khóa:</b>
        </span>
        {JSON.parse(data?.tags ?? '[]')?.map((item, index) => (
          <span
            key={index}
            style={{ backgroundColor: '#191D23', padding: 7, marginRight: 7 }}
            onClick={() => onClickTag && onClickTag()}
          >
            {item?.text}
          </span>
        ))}
      </p>
    </div>
  );
};

export default Tags;
