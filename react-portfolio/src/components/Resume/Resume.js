import './index.css';
import Slate from '../../assets/cover/slate.jpg'

const Resume = () => {
    const skills = [
        {
            name: 'HTML'
        },
        {
            name: 'CSS'
        },
        {
            name: 'Express.js'
        },
        {
            name: 'JavaScript'
        },
        {
            name: 'React'
        },
        {
            name: 'Node.js'
        },
        {
            name: 'MongoDB'
        },
        {
            name: 'MySQL'
        }
    ]


    return (
        <section className="Resume" style={{ backgroundImage: `url(${Slate})` }}>
            <h2 className='title'>Resume</h2>
            <div className='box'>
                <div id='resume-link-div' className='row'>
                    <a id='resume-link' href='https://docs.google.com/document/d/1S6CG0tLxE9F4QnNTvDXhOB7XksfhdOLOm7D24WJXpvA/edit?usp=sharing' download>Click Me To Download Resume 😃</a>
                </div>
                <h3 className="skill-name">Proficiencies</h3>
                <div id='skills-div' className='row'>
                    <ul>
                        {skills.map((skill, index) => (
                            <li className='skill' key={index}>{skill.name}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Resume;