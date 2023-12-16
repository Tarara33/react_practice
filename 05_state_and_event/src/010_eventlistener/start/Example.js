const Example = () => {
  const clickHandler = () => {
    alert('今日の夜ご飯は？？');
  };

  const clickHandler2 = () => {
    console.log('ボタン押されたぜよ！')
  };

  return (
    <>
    <button onClick={clickHandler()}>クリックしてね</button>
    <button onClick={clickHandler2()}>クリックしてね</button>
    </>
  );
};

export default Example;
