import React, {useState, useCallback} from 'react';
import List from "./components/list";
import Controls from "./components/controls";
import Head from "./components/head";
import PageLayout from "./components/page-layout";

/**
 * Приложение
 * @param store {Store} Хранилище состояния приложения
 * @returns {React.ReactElement}
 */
function App({store}) {
  const [openCart, setOpenCart] = useState(false);


  const list = store.getState().list;

  const callbacks = {
    onDeleteItem: useCallback((code) => {
      store.deleteItem(code);
    }, [store]),

    onSelectItem: useCallback((code) => {
      store.selectItem(code);
    }, [store]),

    onAddItem: useCallback(() => {
      store.addItem();
    }, [store])
  }

  return (
    <PageLayout>
      <Head title='Магазин'/>
      <Controls openBasket ={openCart} setOpenBasket={setOpenCart}/>
      <List list={list}
            // onDeleteItem={callbacks.onDeleteItem}
            onAddItem = {callbacks.onAddItem}
            onSelectItem={callbacks.onSelectItem}/>
    </PageLayout>
  );
}

export default App;
