import { Alert, ButtonBackground, ButtonHover, CloseButtonAlert, Search, InputButtonSearch, InputSearch, CardWrapper, CardItem, GambarWrapper, GambarItem, Form, LabelForm, InputForm, } from "nurkumalasari-designsystem";

function App() {
  return (
    <div className="App">
      <ButtonHover></ButtonHover>
      <ButtonBackground></ButtonBackground>
      <Alert>
        <CloseButtonAlert>&timess;</CloseButtonAlert>
      </Alert>
      <Search>
        <InputSearch></InputSearch>
        <InputButtonSearch></InputButtonSearch>
      </Search>
      <CardWrapper>
        <CardItem>
        </CardItem>
      </CardWrapper>
      <GambarWrapper>
        <GambarItem></GambarItem>
      </GambarWrapper>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <Form>
        <LabelForm></LabelForm>
        <InputForm></InputForm>
      </Form>
    </div>
  );
}

export default App;