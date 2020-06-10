import axios from 'axios';

export default axios.create(
    {   
        baseURL : 'https://api.unsplash.com' ,
        headers : {
            Authorization : 'Client-ID _dHxziWCx3HFteAqEOIjAz_5Fzq0szChDExUmuaNUDg'
        }
    }
);
