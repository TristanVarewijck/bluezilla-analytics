import Card from 'react-bootstrap/Card';

const InfoBar = () => {
    return (
        <div className="InfoBar">
            <Card>
                <Card.Body >
                    <Card.Text>
                        token
                    </Card.Text>

                    <Card.Text>
                        price
                    </Card.Text>

                    <Card.Text>
                        1 hour
                    </Card.Text>

                    <Card.Text>
                        last hour
                    </Card.Text>
                </Card.Body>
            </Card >
        </div>
    );
}

export default InfoBar;