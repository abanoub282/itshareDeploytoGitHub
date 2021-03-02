

export class PostCallBack 
{
  public posts: any [];
     getCallBack = (response)=>{
        this.posts = response.json();
        localStorage.setItem('DBPosts', JSON.stringify(this.posts));
    }
}