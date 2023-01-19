import { Container, Button, Card, InputGroup, Row, FormControl } from 'react-bootstrap'
import { useState, useEffect } from 'react'
import '../css/Style.css';
import { AiOutlineSearch } from "react-icons/ai";
import { Link } from 'react-router-dom';

function Search() {

    const [searchInput, setSearchInput] = useState("")
    const [resultsSearch, setResultsSearch] = useState([])
    const search = async () => {
        var resultSearch = await fetch('https://api-beta.melobit.com/v1/search/query/' + searchInput + '/0/50')
            .then(Response =>
                Response.json())
            .then(data => {
                setResultsSearch(data.results)
            })
        console.log(resultsSearch)
    }
    return (
        <div className="App">
            <Container>
                <InputGroup className='mt-5 mb-3 ' size='lg'>
                    <FormControl
                        className='search-input '
                        placeholder='Search Music Or Artist'
                        type='input'
                        onKeyPress={event => {
                            if (event.key == "Enter") {
                                search()
                            }
                        }}
                        onChange={event => setSearchInput(event.target.value)}
                    >
                    </FormControl>
                    <Button className='search-btn ' onClick={search}>Search</Button>
                </InputGroup>
            </Container>
            <Container>
                <Row className='mx-2 row row-cols-6'>
                    {resultsSearch.map((songs) => (
                        songs.type === "song" &&
                        <Link to={`detailsong/${songs.song.id}`}>
                            <Card className='transparent-card'>
                                <Card.Img src={songs.song.album.image.cover.url} />
                                <Card.Body>
                                    <Card.Title className='text-blue' >{songs.song.album.name}</Card.Title>
                                    <Card.Title className='text-light'>{songs.song.album.artists[0].fullName}</Card.Title>
                                </Card.Body>
                            </Card>
                        </Link>
                    ))
                    }
                </Row>
            </Container>
        </div >
    );
}
export default Search;