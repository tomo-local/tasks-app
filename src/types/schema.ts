export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  graphql_public: {
    Tables: {
      [_ in never]: never
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      graphql: {
        Args: {
          operationName?: string
          query?: string
          variables?: Json
          extensions?: Json
        }
        Returns: Json
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
  public: {
    Tables: {
      comments: {
        Row: {
          content: string
          created_at: string | null
          id: string
          task_id: string | null
          user_id: string | null
        }
        Insert: {
          content: string
          created_at?: string | null
          id?: string
          task_id?: string | null
          user_id?: string | null
        }
        Update: {
          content?: string
          created_at?: string | null
          id?: string
          task_id?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "comments_task_id_fkey"
            columns: ["task_id"]
            referencedRelation: "tasks"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "comments_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      custom_task_status: {
        Row: {
          color: string
          id: string
          name: string
          origin_status: string
        }
        Insert: {
          color?: string
          id?: string
          name: string
          origin_status: string
        }
        Update: {
          color?: string
          id?: string
          name?: string
          origin_status?: string
        }
        Relationships: [
          {
            foreignKeyName: "custom_task_status_origin_status_fkey"
            columns: ["origin_status"]
            referencedRelation: "origin_task_status"
            referencedColumns: ["id"]
          }
        ]
      }
      origin_task_status: {
        Row: {
          default_color: string
          id: string
          name: string
        }
        Insert: {
          default_color?: string
          id?: string
          name: string
        }
        Update: {
          default_color?: string
          id?: string
          name?: string
        }
        Relationships: []
      }
      profiles: {
        Row: {
          avatar_url: string | null
          base_language: string
          description: string | null
          full_name: string | null
          id: string
          location: string | null
          public: boolean
          self_introduction: string | null
          social_link: string[] | null
          updated_at: string | null
          username: string
        }
        Insert: {
          avatar_url?: string | null
          base_language?: string
          description?: string | null
          full_name?: string | null
          id: string
          location?: string | null
          public?: boolean
          self_introduction?: string | null
          social_link?: string[] | null
          updated_at?: string | null
          username: string
        }
        Update: {
          avatar_url?: string | null
          base_language?: string
          description?: string | null
          full_name?: string | null
          id?: string
          location?: string | null
          public?: boolean
          self_introduction?: string | null
          social_link?: string[] | null
          updated_at?: string | null
          username?: string
        }
        Relationships: [
          {
            foreignKeyName: "profiles_id_fkey"
            columns: ["id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      projects: {
        Row: {
          create_user: string | null
          created_at: string | null
          id: string
          project_id: string | null
          project_name: string | null
        }
        Insert: {
          create_user?: string | null
          created_at?: string | null
          id?: string
          project_id?: string | null
          project_name?: string | null
        }
        Update: {
          create_user?: string | null
          created_at?: string | null
          id?: string
          project_id?: string | null
          project_name?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "projects_create_user_fkey"
            columns: ["create_user"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      relations: {
        Row: {
          created_at: string | null
          id: string
        }
        Insert: {
          created_at?: string | null
          id?: string
        }
        Update: {
          created_at?: string | null
          id?: string
        }
        Relationships: []
      }
      tasks: {
        Row: {
          content: string | null
          created_at: string | null
          id: string
          manage_user_id: string | null
          relation: string | null
          status: string
          title: string
          update_at: string | null
          user_id: string | null
        }
        Insert: {
          content?: string | null
          created_at?: string | null
          id?: string
          manage_user_id?: string | null
          relation?: string | null
          status?: string
          title: string
          update_at?: string | null
          user_id?: string | null
        }
        Update: {
          content?: string | null
          created_at?: string | null
          id?: string
          manage_user_id?: string | null
          relation?: string | null
          status?: string
          title?: string
          update_at?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "tasks_manage_user_id_fkey"
            columns: ["manage_user_id"]
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "tasks_relation_fkey"
            columns: ["relation"]
            referencedRelation: "relations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "tasks_status_fkey"
            columns: ["status"]
            referencedRelation: "custom_task_status"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "tasks_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          }
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
  storage: {
    Tables: {
      buckets: {
        Row: {
          allowed_mime_types: string[] | null
          avif_autodetection: boolean | null
          created_at: string | null
          file_size_limit: number | null
          id: string
          name: string
          owner: string | null
          owner_id: string | null
          public: boolean | null
          updated_at: string | null
        }
        Insert: {
          allowed_mime_types?: string[] | null
          avif_autodetection?: boolean | null
          created_at?: string | null
          file_size_limit?: number | null
          id: string
          name: string
          owner?: string | null
          owner_id?: string | null
          public?: boolean | null
          updated_at?: string | null
        }
        Update: {
          allowed_mime_types?: string[] | null
          avif_autodetection?: boolean | null
          created_at?: string | null
          file_size_limit?: number | null
          id?: string
          name?: string
          owner?: string | null
          owner_id?: string | null
          public?: boolean | null
          updated_at?: string | null
        }
        Relationships: []
      }
      migrations: {
        Row: {
          executed_at: string | null
          hash: string
          id: number
          name: string
        }
        Insert: {
          executed_at?: string | null
          hash: string
          id: number
          name: string
        }
        Update: {
          executed_at?: string | null
          hash?: string
          id?: number
          name?: string
        }
        Relationships: []
      }
      objects: {
        Row: {
          bucket_id: string | null
          created_at: string | null
          id: string
          last_accessed_at: string | null
          metadata: Json | null
          name: string | null
          owner: string | null
          owner_id: string | null
          path_tokens: string[] | null
          updated_at: string | null
          version: string | null
        }
        Insert: {
          bucket_id?: string | null
          created_at?: string | null
          id?: string
          last_accessed_at?: string | null
          metadata?: Json | null
          name?: string | null
          owner?: string | null
          owner_id?: string | null
          path_tokens?: string[] | null
          updated_at?: string | null
          version?: string | null
        }
        Update: {
          bucket_id?: string | null
          created_at?: string | null
          id?: string
          last_accessed_at?: string | null
          metadata?: Json | null
          name?: string | null
          owner?: string | null
          owner_id?: string | null
          path_tokens?: string[] | null
          updated_at?: string | null
          version?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "objects_bucketId_fkey"
            columns: ["bucket_id"]
            referencedRelation: "buckets"
            referencedColumns: ["id"]
          }
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      can_insert_object: {
        Args: {
          bucketid: string
          name: string
          owner: string
          metadata: Json
        }
        Returns: undefined
      }
      extension: {
        Args: {
          name: string
        }
        Returns: string
      }
      filename: {
        Args: {
          name: string
        }
        Returns: string
      }
      foldername: {
        Args: {
          name: string
        }
        Returns: unknown
      }
      get_size_by_bucket: {
        Args: Record<PropertyKey, never>
        Returns: {
          size: number
          bucket_id: string
        }[]
      }
      search: {
        Args: {
          prefix: string
          bucketname: string
          limits?: number
          levels?: number
          offsets?: number
          search?: string
          sortcolumn?: string
          sortorder?: string
        }
        Returns: {
          name: string
          id: string
          updated_at: string
          created_at: string
          last_accessed_at: string
          metadata: Json
        }[]
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
