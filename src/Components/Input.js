export default function Input(props) {
    const {required, ...all} = props;
    const opts = {};
    if (required) {
        opts['required'] = 'required';
    }
    return <input
    {...all} {...opts}
  />
};