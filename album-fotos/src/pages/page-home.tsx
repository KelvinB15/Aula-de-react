
import Container from "../components/container";
import AlbumsFilter from "../contexts/album/components/albums-filter"
import PhotosList from "../contexts/photos/models/components/photos-list";


export default function PageHome() {
    return (
        <Container>   
            <AlbumsFilter albums={[   {id: "123", title: "Album 1"},
                        {id: "1233", title: "Album 2"},
                        {id: "1234", title: "Album 3"}]} className="mb-9"/>
            <PhotosList 
                photos={[
                    {
                    id: "123",
                    title: "Olá mundo!",
                    imageId: "portrait-tower.png",
                    albums: [
                        {id: "3421", title: "Album 1"},
                        {id: "1233", title: "Album 2"},
                        {id: "1234", title: "Album 3"}
                    ]
                },
                 {
                    id: "1243",
                    title: "Olá mundo!",
                    imageId: "portrait-tower.png",
                    albums: [
                        {id: "3421", title: "Album 1"},
                        {id: "1233", title: "Album 2"},
                        {id: "1234", title: "Album 3"}
                    ]
                },
                ]}
            />
             <PhotosList 
                photos={[]}
                loading
            />
        </Container>
    )
}