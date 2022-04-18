import { Link } from 'react-router-dom'
import Card from '../components/share/Card'
function AboutPage() {
    return (
        <>
            <Card>
                <div className="about">
                    <p>hello about</p>
                    <p>
                        <Link exact to='/'>Back</Link>
                    </p>

                </div>
            </Card>
        </>
    )
}
export default AboutPage