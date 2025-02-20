import {Indexheader , Indexfooter , Indexsidebar} from './imported';


export default function MainIndex   () {

 return <div>
    <Indexheader />
    <div>
        <h1>Hi , this is my project</h1>
        <p>Here is the main content of the page</p>
    </div>
    <Indexsidebar />
    <div>
        <h1>Index Main Content</h1>
        <p>please explore this pages.</p>
    </div>
    <Indexfooter />
    <h1>@2025 , project activity </h1>
        <p>Here is the main content of the page</p>
 </div>;

}

