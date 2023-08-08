import React from 'react';
import s from './News.module.css'
import NewsCard from "./NewsCard/NewsCard";


function News(props) {

    let newsData =[
        {
            "id": 1,
            "title": "Article 1",
            "content": "This is the content of Article 1.",
            "image": "https://images.pexels.com/photos/17814801/pexels-photo-17814801.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "video": "https://example.com/video1.mp4",
            "published": true,
            "time_create": "2023-07-24T05:42:15.534506Z",
            "time_update": "2023-07-24T05:42:15.534506Z"
        },
        {
            "id": 2,
            "title": "Article 2",
            "content": "This is the content of Article 2.",
            "image": "https://images.pexels.com/photos/14564622/pexels-photo-14564622.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "video": "https://example.com/video2.mp4",
            "published": true,
            "time_create": "2023-07-25T08:15:30.123456Z",
            "time_update": "2023-07-25T08:15:30.123456Z"
        },
        {
            "id": 3,
            "title": "Article 3",
            "content": "This is the content of Article 3.",
            "image": "https://images.pexels.com/photos/17838489/pexels-photo-17838489.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "video": "https://example.com/video3.mp4",
            "published": false,
            "time_create": "2023-07-26T14:20:59.789012Z",
            "time_update": "2023-07-26T14:20:59.789012Z"
        },
        {
            "id": 4,
            "title": "Article 4",
            "content": "This is the content of Article 4.",
            "image": "https://images.pexels.com/photos/2422252/pexels-photo-2422252.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "video": "https://example.com/video4.mp4",
            "published": true,
            "time_create": "2023-07-27T16:35:12.345678Z",
            "time_update": "2023-07-27T16:35:12.345678Z"
        },
        {
            "id": 5,
            "title": "Article 5",
            "content": "This is the content of Article 5.",
            "image": "https://images.pexels.com/photos/17743151/pexels-photo-17743151.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "video": "https://example.com/video5.mp4",
            "published": false,
            "time_create": "2023-07-28T18:45:29.012345Z",
            "time_update": "2023-07-28T18:45:29.012345Z"
        },
        {
            "id": 6,
            "title": "Article 6",
            "content": "This is the content of Article 6.",
            "image": "https://images.pexels.com/photos/9563345/pexels-photo-9563345.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "video": "https://example.com/video6.mp4",
            "published": true,
            "time_create": "2023-07-29T22:05:45.678901Z",
            "time_update": "2023-07-29T22:05:45.678901Z"
        },
        {
            "id": 7,
            "title": "Article 7",
            "content": "This is the content of Article 7.",
            "image": "https://images.pexels.com/photos/6769750/pexels-photo-6769750.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "video": "https://example.com/video7.mp4",
            "published": true,
            "time_create": "2023-07-30T03:20:15.123456Z",
            "time_update": "2023-07-30T03:20:15.123456Z"
        },
        {
            "id": 8,
            "title": "Article 8",
            "content": "This is the content of Article 8.",
            "image": "https://images.pexels.com/photos/17734329/pexels-photo-17734329.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "video": "https://example.com/video8.mp4",
            "published": false,
            "time_create": "2023-07-31T09:10:45.678901Z",
            "time_update": "2023-07-31T09:10:45.678901Z"
        },
        {
            "id": 9,
            "title": "Article 9",
            "content": "This is the content of Article 9.",
            "image": "https://images.pexels.com/photos/17643753/pexels-photo-17643753.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "video": "https://example.com/video9.mp4",
            "published": true,
            "time_create": "2023-08-01T11:25:30.234567Z",
            "time_update": "2023-08-01T11:25:30.234567Z"
        },
        {
            "id": 10,
            "title": "Article 10",
            "content": "This is the content of Article 10.",
            "image": "https://images.pexels.com/photos/15309757/pexels-photo-15309757.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "video": "https://example.com/video10.mp4",
            "published": true,
            "time_create": "2023-08-02T15:40:00.345678Z",
            "time_update": "2023-08-02T15:40:00.345678Z"
        },
        {
            "id": 11,
            "title": "Article 11",
            "content": "This is the content of Article 11.",
            "image": "https://images.pexels.com/photos/15820604/pexels-photo-15820604.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "video": "https://example.com/video11.mp4",
            "published": false,
            "time_create": "2023-08-03T17:55:20.456789Z",
            "time_update": "2023-08-03T17:55:20.456789Z"
        },
        {
            "id": 12,
            "title": "Article 12",
            "content": "This is the content of Article 12.",
            "image": "https://images.pexels.com/photos/17815384/pexels-photo-17815384.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "video": "https://example.com/video12.mp4",
            "published": true,
            "time_create": "2023-08-04T20:15:45.567890Z",
            "time_update": "2023-08-04T20:15:45.567890Z"
        },
        {
            "id": 13,
            "title": "Article 13",
            "content": "This is the content of Article 13.",
            "image": "https://images.pexels.com/photos/17505948/pexels-photo-17505948.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "video": "https://example.com/video13.mp4",
            "published": false,
            "time_create": "2023-08-05T23:30:10.678901Z",
            "time_update": "2023-08-05T23:30:10.678901Z"
        },
        {
            "id": 14,
            "title": "Article 14",
            "content": "This is the content of Article 14.",
            "image": "https://images.pexels.com/photos/17057428/pexels-photo-17057428.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "video": "https://example.com/video14.mp4",
            "published": true,
            "time_create": "2023-08-06T02:45:00.789012Z",
            "time_update": "2023-08-06T02:45:00.789012Z"
        },
        {
            "id": 15,
            "title": "Article 15",
            "content": "This is the content of Article 15.",
            "image": "https://images.pexels.com/photos/17026634/pexels-photo-17026634.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
            "video": "https://example.com/video15.mp4",
            "published": true,
            "time_create": "2023-08-07T06:00:59.890123Z",
            "time_update": "2023-08-07T06:00:59.890123Z"
        },
        {
            "id": 16,
            "title": "Article 16",
            "content": "This is the content of Article 16.",
            "image": "https://images.pexels.com/photos/17026631/pexels-photo-17026631/free-photo-of-02-06.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "video": "https://example.com/video16.mp4",
            "published": false,
            "time_create": "2023-08-08T10:25:30.901234Z",
            "time_update": "2023-08-08T10:25:30.901234Z"
        },
        {
            "id": 17,
            "title": "Article 17",
            "content": "This is the content of Article 17.",
            "image": "https://images.pexels.com/photos/12186839/pexels-photo-12186839.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "video": "https://example.com/video17.mp4",
            "published": true,
            "time_create": "2023-08-09T12:40:15.012345Z",
            "time_update": "2023-08-09T12:40:15.012345Z"
        },
        {
            "id": 18,
            "title": "Article 18",
            "content": "This is the content of Article 18.",
            "image": "https://images.pexels.com/photos/15444332/pexels-photo-15444332.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "video": "https://example.com/video18.mp4",
            "published": true,
            "time_create": "2023-08-10T15:00:20.123456Z",
            "time_update": "2023-08-10T15:00:20.123456Z"
        },
        {
            "id": 19,
            "title": "Article 19",
            "content": "This is the content of Article 19.",
            "image": "https://images.pexels.com/photos/17781404/pexels-photo-17781404.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "video": "https://example.com/video19.mp4",
            "published": false,
            "time_create": "2023-08-11T18:15:10.234567Z",
            "time_update": "2023-08-11T18:15:10.234567Z"
        },
        {
            "id": 20,
            "title": "Article 20",
            "content": "This is the content of Article 20.",
            "image": "https://images.pexels.com/photos/3994192/pexels-photo-3994192.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "video": "https://example.com/video20.mp4",
            "published": true,
            "time_create": "2023-08-12T21:30:05.345678Z",
            "time_update": "2023-08-12T21:30:05.345678Z"
        }
    ]

    let newNewsData = newsData.map(el => <NewsCard img={el.image}
                                                   title={el.title}
                                                   published={el.published}
                                                   time={el.time_create}/>)

    return (
        <div className={s.cards}>
            {newNewsData}
        </div>
    );
}

export default News;