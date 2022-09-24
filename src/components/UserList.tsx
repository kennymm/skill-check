import { UserProfile } from "../types/userProfile";

type Props = {
    user: UserProfile;
};

export const UserList = (props:Props) => {
    const { user } = props;
    const style = {
        border:"solid 1px teal",
        borderRadius:"8px",
        padding:"0 16px",
        margin: "8px"
    }
    return (
        <div style={style}>
            <dl>
                <dt>名前</dt>
                <dd>{user.name}</dd>
                <dt>会社名</dt>
                <dd>{user.company}</dd>
                <dt>電話番号</dt>
                <dd>{user.phone}</dd>
                <dt>メールアドレス</dt>
                <dd>{user.email}</dd>
            </dl>
        </div>
    )
}