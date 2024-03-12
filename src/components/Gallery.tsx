//react
import React, { useEffect, useState } from 'react';

//aws
import { generateClient } from 'aws-amplify/api';
import { listPosts } from './../graphql/queries';
import { type posts } from './../API';
//custom
import Header from './Header';
import Modal from './frag/Modal';

//style
import './css/Gallery.css'

//data 
import local_posts from './../assets/data/posts.json'

const client = generateClient();

interface Props {
    breakpoint?: number;
}

const Gallery = ({breakpoint}: Props) => {
    // fetch data babes
    
    const [posts_data, setPosts] = useState<posts[]>([]);

    useEffect(() => {
        fetchPosts();
    }, []);

    async function fetchPosts() {
        try {
        const postsData = await client.graphql({
            query: listPosts,
        });
        const _posts = postsData.data.listPosts.items;
        setPosts(_posts);
        } catch (err) {
        console.log('error fetching todos');
        }
    }
    /********************/
    const [sortKey, setSortKey] = useState('');
    const [filter, setFilter] = useState('');
    const [filteredData, setFilteredData] = useState(local_posts);

    const handleFilterChange = (event: React.FormEvent<HTMLSelectElement>) => {
        event.preventDefault();
        var safeSearchTypeValue: string = event.currentTarget.value;
        setFilter(safeSearchTypeValue);
        filterData(safeSearchTypeValue);
    };

    const filterData = (filter: string) => {
        const filteredData = local_posts.filter((item) => 
            item.discipline.toLowerCase().includes(filter.toLowerCase())
        );
        setFilteredData(filteredData);
    };

    const handleSortChange = (event: React.FormEvent<HTMLSelectElement>) => {
        event.preventDefault();
        var sortParam: string = event.currentTarget.value;
        setSortKey(sortParam);
        sortData(sortParam);
    }

    const sortData = (sort: string) => {
        const sortedData = local_posts.sort((a, b) =>
            {
                if (sort==="title") {
                    if (a.title < b.title) {
                        return -1;
                    } else if (a.title > b.title) {
                        return 1;
                    } else {
                        if (a.year < b.year) return -1
                        else if (a.year > b.year) return 1
                        else {
                            if (a.id < b.id ) return -1
                            else return 1;
                        }
                    }
                } else if (sort==="discipline"){
                    if (a.discipline < b.discipline) return -1
                    else if (a.discipline > b.discipline) return 1
                    else {
                        if (a.title < b.title) {
                            return -1;
                        } else if (a.title > b.title) {
                            return 1;
                        } else {
                            if (a.year < b.year) return -1
                            else if (a.year > b.year) return 1
                            else {
                                if (a.id < b.id ) return -1
                                else return 1;
                            }
                        }
                    }
                } else if (sort==="type"){
                    if (a.type < b.type) return -1
                    else if (a.type > b.type) return 1
                    else {
                        if (a.title < b.title) {
                            return -1;
                        } else if (a.title > b.title) {
                            return 1;
                        } else {
                            if (a.year < b.year) return -1
                            else if (a.year > b.year) return 1
                            else {
                                if (a.id < b.id ) return -1
                                else return 1;
                            }
                        }
                    }
                } else if (sort==="type") {
                    if (a.year < b.year) {
                        return -1;
                    } else if (a.year > b.year) {
                        return 1;
                    } else {
                        if (a.title < b.title) return -1
                        else if (a.title > b.title) return 1
                        else {
                            if (a.id < b.id ) return -1
                            else return 1;
                        }
                    }
                } else {
                    if (a.year < b.year) {
                        return -1;
                    } else if (a.year > b.year) {
                        return 1;
                    } else {
                        if (a.title < b.title) return -1
                        else if (a.title > b.title) return 1
                        else {
                            if (a.id < b.id ) return -1
                            else return 1;
                        }
                    }
                }
            }
            
        );
        setFilteredData(sortedData);
    };
    
    return (
        <div>
            <Header breakpoint={breakpoint}/>        
            <div className='content'>
                <div className='gallery'>
                    <div className='subheader'>
                        <div className='text'>
                            <h1>Gallery.</h1>
                            <h2>{filter}</h2>
                        </div>
                        <div className='spacer' />
                        <select className='dropdown filter' value={filter} onChange={handleFilterChange}>
                            <option value={""}>All</option>
                            <option value={"3d-modelling"}>3D Modeling</option>
                            <option value={"graphic-design"}>Graphic Design</option>
                            <option value={"vid-prod"}>Video Production</option>
                            <option value={"web-dev"}>Web Dev</option>
                        </select>
                        <select className='dropdown sort' value={sortKey} onChange={handleSortChange}>
                            <option value={""}>---</option>
                            <option value={"year"}>Year</option>
                            <option value={"title"}>Title</option>
                            <option value={"type"}>Format</option>
                            <option value={"discipline"}>Discipline</option>
                        </select>
                    </div>
                    <div className='viewport-container'>
                        <ul>
                        {posts_data.map((item) => (
                                <>
                                <li key={item.id}>
                                    <Modal className="Modal" post={item} breakpoint={breakpoint} />
                                </li>
                                </>
                            ))}
                        </ul>
                    </div>
                    {/*
                    <div className='viewport-container'>
                        <div className='spacer' />
                        <ul>
                            {filteredData.map((item) => (
                                <>
                                <li key={item.id}>
                                    <Modal className="Modal" post={item} breakpoint={breakpoint} />
                                </li>
                                </>
                            ))}
                        </ul>
                        <div className='spacer' />
                    </div>
                            */}
                </div>
            </div>    
            
        </div>
    )
};

export default Gallery;
