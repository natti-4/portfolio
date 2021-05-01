
type Prop = {
  title: string
  skills: string[][]
}

const Skilltable: React.FC<Prop> = (props) => {
  const { title, skills } = props
  return (
    <>
      <h3 className="py-4">{title}</h3>
      <table className="w-full">
      {skills.map(skill => (
          <tr>
            <td className="w-6/12">{skill[0]}</td>
            <td>{skill[1]}</td>
          </tr>
      ))}
      </table>
    </>
  )
}

export default Skilltable