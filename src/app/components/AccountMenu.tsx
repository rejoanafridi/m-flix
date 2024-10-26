import { FC } from 'react'

interface AccountMenuProps {
    accountMenuOpen: boolean
    setAccountMenuOpen: (open: boolean) => void
}

const AccountMenu: FC<AccountMenuProps> = ({
    accountMenuOpen,
    setAccountMenuOpen
}) => (
    <div
        className="flex items-center gap-[10px] cursor-pointer relative"
        onClick={() => setAccountMenuOpen(!accountMenuOpen)}
    >
        Sign in
    </div>
)

export default AccountMenu
