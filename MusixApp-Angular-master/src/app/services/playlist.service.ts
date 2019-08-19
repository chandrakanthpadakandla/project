import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Track } from '../track';

@Injectable({
  providedIn: 'root'
})
export class PlaylistService {

  public track;

  constructor(private http: HttpClient) { }

  addToPlaylist(trackAdd) : Observable<any>{
    var uid = (new Date().getTime()).toString(36);
    console.log(uid)
    this.track  = new Track(uid, trackAdd.name, trackAdd.url);
    return this.http.post<any>('http://localhost:8080/track-service/api/v1/track', this.track)
  }

  getPlaylist() : Observable<any>{
 
    return this.http.get<any>('http://localhost:8080/track-service/api/v1/track');
  }

  removeFromPlaylist(trackRemove) : Observable<any>{
  
    console.log(trackRemove);
    this.track  = new Track(trackRemove.trackId, trackRemove.trackName, trackRemove.comments);
    console.log(this.track)
    return this.http.delete<any>('http://localhost:8080/track-service/api/v1/delete', this.track)
  }
}
