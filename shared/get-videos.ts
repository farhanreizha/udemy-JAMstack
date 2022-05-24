import { YoutubeChannle } from './types'

const { YOUTUBE_CHANNLE_ID, YOUTUBE_TOKEN } = process.env

const YOUTUBE_API = `http://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${YOUTUBE_CHANNLE_ID}&key=${YOUTUBE_TOKEN}&type=video&order=date&maxResults=6`

export const getYoutubeVideos = async () => {
  const youtubeResp = await fetch(YOUTUBE_API)
  const channleObject: YoutubeChannle = await youtubeResp.json()

  return channleObject?.items?.map(
    (video) =>
      ({
        id: video.id.videoId,
        title: video.snippet.title,
        image: video.snippet.thumbnails.high.url,
        url: `https://www.youtube.com/watch?v=${video.id.videoId}`,
      } ?? [])
  )
}
