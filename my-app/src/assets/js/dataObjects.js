// Constructor function for music objects
function Music(
    Music_id
    , Name
    , File
    , Image
    , Gener
    , Music_count
    , Artist
    , length
    , Time_stamp
    , Quility
    , Type
) {
    this.Music_id = Music_id;
    this.Name=Name;
    this.File = File;
    this.Artist=Artist;
    this.length=length;
    this.Time_stamp = Time_stamp;
    this.Quility = Quility;
    this.Gener = Gener;
    this.Music_count = Music_count;
    this.Type = Type;
    this.Image=Image;
}
// Constructor function for playlist object
function Playlist(list)
{
    this.list=list;
    this.add=function(object){this.list.push(object);}
    this.remove=function(object){this.list.pop()}
}
