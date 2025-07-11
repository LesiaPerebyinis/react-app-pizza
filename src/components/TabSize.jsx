

function TabSize(props) {
  const tabs = ["Стандартна", "Велика", "Екстравелика"];

  return (
    <div className="product-size">
      {tabs.map((tab, tabIndex) => {

        return (
          <button
            onClick={() => props.selectSize(tabIndex)}
            key={tabIndex}
            className={tabIndex === props.selectedSize ? 'size-selected' : ''}
          >
            {tab}
          </button>
        );
      })}
   
    </div>
  );
}

export default TabSize;
