export interface UserProps {
    id: string;
    email: string;
    fullName?: string;
    avatarUrl?: string;
    role?: 'user' | 'admin'; // optional roles
  }
  
  export class User {
    readonly id: string;
    readonly email: string;
    fullName?: string;
    avatarUrl?: string;
    role: 'user' | 'admin';
  
    constructor(props: UserProps) {
      this.id = props.id;
      this.email = props.email;
      this.fullName = props.fullName ?? '';
      this.avatarUrl = props.avatarUrl ?? '';
      this.role = props.role ?? 'user';
    }
  }
  