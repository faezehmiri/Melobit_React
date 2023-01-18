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
                    <Button className='search-btn rounded-circle' onClick={search}>
                        <AiOutlineSearch className='text-light search-icon-btn' />
                    </Button>
                </InputGroup>
            </Container>
            <Container>
                <Row className='mx-2 row row-cols-4'>
                    {resultsSearch.map((artist) => (
                        artist.type === "artist" &&
                        <Card className='w-100 m-1 bg-cards'>
                            <div class="d-flex justify-content-center">
                                <Card.Img className='col-2 profile-pic rounded-circle ' src={artist.artist.image.cover.url} />
                                <div className='col-10 d-flex flex-column m-auto'>

                                    <span className='text-blue'>fullName : </span><div className='profile-item'>{artist.artist.fullName}</div>
                                    <span className='text-blue'>followersCount : </span><div className='profile-item'>{artist.artist.followersCount}</div>
                                    <span className='text-blue'> sumSongsDownloadsCount </span><div className='profile-item'>{artist.artist.sumSongsDownloadsCount}</div>
                                </div>
                            </div>
                            <div>
                            </div>
                        </Card>
                    ))
                    }
                </Row>
                <Row className='mx-2 row row-cols-4'>
                    {resultsSearch.map((songs) => (
                        songs.type === "song" &&
                        <Link to={`detailsong/${songs.song.id}`}>
                            <Card className='transparent-card'>
                                <Card.Img src={songs.song.album.image.cover.url} />
                                <Card.Body>
                                    <Card.Title className='text-pink' >{songs.song.album.name}</Card.Title>
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