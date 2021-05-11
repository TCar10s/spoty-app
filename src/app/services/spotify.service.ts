import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class SpotifyService {
  constructor(private http: HttpClient) {}

  getQuery(query: string): any {
    const url = `https://api.spotify.com/v1/${query}`;

    const headers = new HttpHeaders({
      Authorization:
        'Bearer BQAdpfmtmvR8w1lUWNwe2TmYWnP2HhM9S-DJN3aHkpYmOgijIlqRleibjt7jMm0Ml89Y8fLaf9ii0K5fI58',
    });
    return this.http.get(url, { headers });
  }

  getArtist(id: string): any {
    return this.getQuery(`artists/${id}`);
  }

  getArtists(): any {
    return this.getQuery(
      'artists?ids=7Ey4PD4MYsKc5I2dolUwbH%2C58lV9VcRSjABbAbfWS6skp%2C1Yox196W7bzVNZI7RBaPnf%2C36QJpDe2go2KgaRleHCDTp%2C3qm84nBOXUEQ2vnTfUTTFC%2C4NpFxQe2UvRCAjto3JqlSl%2C7oPftvlwr6VrsViSDV7fJY%2C6mdiAmATAx73kdxrNrnlao%2C0epOFNiUfyON9EYx7Tpr6V%2C3IYUhFvPQItj6xySrBmZkd%2C2xiIXseIJcq3nG7C8fHeBj%2C22WZ7M8sxp5THdruNY3gXt%2C711MCceyCBcFnzjGY4Q7Un%2C2ye2Wgw4gimLv2eAKyk1NB%2C5M52tdBnJaKSvOpJGz8mfZ%2C3WrFJ7ztbogyGnTHbHJFl2%2C22bE4uQ6baNwSHPVcDxLCe%2C3fMbdgg4jU18AjLCKBhRSm'
    ).pipe(map((data: any) => data.artists));
  }

  getSong(id: string): any {
    return this.getQuery(`tracks/${id}`);
  }

  getSongs(term: string): any {
    return this.getQuery(
      `search?query=${term}&type=track&offset=0&limit=15`
    ).pipe(map((data: any) => data.tracks.items));
  }

  getTopTracks(id: string): any {
    return this.getQuery(`artists/${id}/top-tracks?market=us`).pipe(
      map((data: any) => data.tracks)
    );
  }
}
