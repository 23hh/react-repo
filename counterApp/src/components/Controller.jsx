const Controller = ({ onClickBotton }) => {
  return (
    <div>
      <button
        onClick={() => {
          onClickBotton(-1);
        }}
      >
        -1
      </button>
      <button
        onClick={() => {
          onClickBotton(-10);
        }}
      >
        -10
      </button>
      <button
        onClick={() => {
          onClickBotton(-100);
        }}
      >
        -100
      </button>
      <button
        onClick={() => {
          onClickBotton(+100);
        }}
      >
        +100
      </button>
      <button
        onClick={() => {
          onClickBotton(+10);
        }}
      >
        +10
      </button>
      <button
        onClick={() => {
          onClickBotton(+1);
        }}
      >
        +1
      </button>
    </div>
  );
};

export default Controller;
