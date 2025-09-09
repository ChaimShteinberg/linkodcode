import "../styles/formSection.css";

function FormSection(props: {
  label: string;
  id: string;
  type: string;
  setInput: Function;
}) {
  return (
    <section className="formsection">
      <label htmlFor={props.id}>{props.label}</label>
      <input
        type={props.type}
        id={props.id}
        required
        onChange={(e) => props.setInput(e.target.value)}
      />
    </section>
  );
}

export default FormSection;
