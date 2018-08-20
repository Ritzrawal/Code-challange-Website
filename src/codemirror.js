import {Controlled as CodeMirror} from 'react-codemirror2'
 
<CodeMirror
  value={this.state.value}
  options={options}
  onBeforeChange={(editor, data, value) => {
    this.setState({value});
  }}
  onChange={(editor, data, value) => {
  }}
/>