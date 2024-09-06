import Card from './Card';
const CardList = ({ robots }) => {
    // if (true){
    //     throw new Error('Noooooooooo');
    // }
    return (
        <div>
            {
                robots.map((user, i) => {
                    return <Card
                        key={i}
                        id={robots[i].id}
                        name={robots[i].name}
                        username={robots[i].username}
                        email={robots[i].email}
                    />
                })
            }
        </div>
    );
}
export default CardList;