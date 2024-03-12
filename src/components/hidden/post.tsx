import { useEffect, useState } from 'react';

import { generateClient } from 'aws-amplify/api';

import { createPosts } from './../../graphql/mutations';
import { listPosts } from './../../graphql/queries';
import { type CreatePostsInput, type posts } from './../../API';

const initialState: CreatePostsInput = { 
    title: '',
    description: '',
    year: null,
    discipline: '',
    project: '',
    type: '',
    thumbnail_url: '',
    url: ''
};
const client = generateClient();

interface Props {
    breakpoint?: number
}
const Gallery = ({breakpoint}: Props) => {
  const [formState, setFormState] = useState<CreatePostsInput>(initialState);
  const [posts, setPosts] = useState<posts[] | CreatePostsInput[]>([]);

  useEffect(() => {
    fetchTodos();
  }, []);

  async function fetchTodos() {
    try {
      const postsData = await client.graphql({
        query: listPosts,
      });
      const _posts = postsData.data.listPosts.items;
      setPosts(_posts);
    } catch (err) {
      console.log('error fetching todos');
    }
  }

  async function addTodo() {
    try {
      if (!formState.title || !formState.description) return;
      const post = { ...formState };
      setPosts([...posts, post]);
      setFormState(initialState);
      await client.graphql({
        query: createPosts,
        variables: {
          input: post,
        },
      });
    } catch (err) {
      console.log('error creating todo:', err);
    }
  }

  return (
    <div style={styles.container}>
      <h2>Amplify Todos</h2>
      <input
        onChange={(event) =>
          setFormState({ ...formState, title: event.target.value })
        }
        style={styles.input}
        value={formState.title}
        placeholder="title"
      />
      <input
        onChange={(event) =>
          setFormState({ ...formState, description: event.target.value })
        }
        style={styles.input}
        value={formState.description as string}
        placeholder="description"
      />
      <input type='number'
        onChange={(event) =>
          setFormState({ ...formState, year: event.target.valueAsNumber })
        }
        style={styles.input}
        value={formState.year as number}
        placeholder="year"
      />
      <input
        onChange={(event) =>
          setFormState({ ...formState, discipline: event.target.value })
        }
        style={styles.input}
        value={formState.discipline as string}
        placeholder="discipline"
      />
      <input
        onChange={(event) =>
          setFormState({ ...formState, project: event.target.value })
        }
        style={styles.input}
        value={formState.project as string}
        placeholder="project"
      />
      <input
        onChange={(event) =>
          setFormState({ ...formState, type: event.target.value })
        }
        style={styles.input}
        value={formState.type as string}
        placeholder="type"
      />
      <input
        onChange={(event) =>
          setFormState({ ...formState, thumbnail_url: event.target.value })
        }
        style={styles.input}
        value={formState.thumbnail_url as string}
        placeholder="thumbnail_url"
      />
      <input
        onChange={(event) =>
          setFormState({ ...formState, url: event.target.value })
        }
        style={styles.input}
        value={formState.url as string}
        placeholder="url"
      />
      <button style={styles.button} onClick={addTodo}>
        Create Post
      </button>
      {posts.map((post, index) => (
        <div key={post.id ? post.id : index} style={styles.todo}>
          <p style={styles.todoName}>{post.title}</p>
          <p style={styles.todoDescription}>{post.description}</p>
        </div>
      ))}
    </div>
  );
};

const styles = {
  container: {
    width: 400,
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: 20,
  },
  todo: { marginBottom: 15 },
  input: {
    border: "none",
    backgroundColor: "#ddd",
    marginBottom: 10,
    padding: 8,
    fontSize: 18,
  },
  todoName: { fontSize: 20, fontWeight: "bold" },
  todoDescription: { marginBottom: 0 },
  button: {
    backgroundColor: "black",
    color: "white",
    outline: "none",
    fontSize: 18,
    padding: "12px 0px",
  },
} as const;

export default Gallery;