import Reactotron from 'reactotron-react-js'
import { reactotronRedux } from 'reactotron-redux'


const reactotron = Reactotron
  .configure({ name: 'React boiler plate' }) // we can use plugins here -- more on this later
    .use(reactotronRedux())
    .connect(); // let's connect!

export default reactotron