import { Typography } from '@mui/material'
import { getDocs, query } from 'firebase/firestore'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import Button from '@/components/Button'
import { postsRef } from '@/firebse'
import { formatedDate } from '@/utils/formatedDate'

interface Tmp {
  id: string
  title: string
  content: string
  created_at: string
  updated_at: string
}

const Demo = () => {
  const [postList, setPostList] = useState<Tmp[]>([])

  useEffect(() => {
    const fetchPosts = async () => {
      const postListQuery = query(postsRef)
      const querySnapshot = await getDocs(postListQuery)
      const newPostList: Tmp[] = []
      querySnapshot.forEach((doc) => {
        // Tmp型じゃなくても受け取れてしまう
        newPostList.push({
          id: doc.data().id,
          title: doc.data().title,
          content: doc.data().content,
          created_at: formatedDate(doc.data().created_at),
          updated_at: doc.data().updated_at
            ? formatedDate(doc.data().updated_at)
            : 'null',
        })
      })
      setPostList(newPostList)
    }
    fetchPosts()
  }, [])

  return (
    <>
      <Button variant='contained'>Hello world</Button>
      {postList.map((post) => (
        <div key={post.id}>
          <Typography>{post.id}</Typography>
          <Typography>{post.title}</Typography>
          <Typography>{post.content}</Typography>
          <Typography>{post.created_at}</Typography>
          <Typography>{post.updated_at}</Typography>
        </div>
      ))}

      <Link href='/'>Back to top</Link>
    </>
  )
}

export default Demo
