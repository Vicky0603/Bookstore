import React from 'react';
import axios from 'axios';
import BookCard from '../containers/BookCard';
import { Container } from 'semantic-ui-react';
import { Card } from 'semantic-ui-react';
import Filter from '../containers/Filter';
import Menu from '../containers/Menu';

class App extends React.Component {
	componentWillMount() {
		const {setBooks} = this.props
		axios.get('/books.json').then(({data}) => {
			setBooks(data);
		});
	}

	render() {
		const {books, isReady} = this.props;
		return (
			<Container>
				<Menu />
				<Filter/>
				<Card.Group itemsPerRow={4}>
					{!isReady ? 'Загрузка...' : books.map((book, index) => <BookCard key={index} {...book}/> )}
				</Card.Group>
			</Container>
			
		);
	}
}


export default App;
