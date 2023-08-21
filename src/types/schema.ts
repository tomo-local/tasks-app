export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
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
          first_name: string | null
          id: string
          last_name: string | null
          self_introduction: string | null
          updated_at: string | null
          username: string
        }
        Insert: {
          avatar_url?: string | null
          first_name?: string | null
          id: string
          last_name?: string | null
          self_introduction?: string | null
          updated_at?: string | null
          username: string
        }
        Update: {
          avatar_url?: string | null
          first_name?: string | null
          id?: string
          last_name?: string | null
          self_introduction?: string | null
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
}
